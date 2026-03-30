import Map "mo:core/Map";
import Array "mo:core/Array";
import Iter "mo:core/Iter";
import Time "mo:core/Time";
import Order "mo:core/Order";
import Text "mo:core/Text";
import Nat "mo:core/Nat";
import Runtime "mo:core/Runtime";
import List "mo:core/List";

actor {
  type ProductCategory = {
    #ragiChips;
    #jowarPuffs;
    #milletCookies;
    #comboPack;
  };

  type Product = {
    name : Text;
    description : Text;
    category : ProductCategory;
    sizes : [ProductSize];
    isAvailable : Bool;
  };

  module Product {
    public func compareByName(product1 : Product, product2 : Product) : Order.Order {
      Text.compare(product1.name, product2.name);
    };
  };

  type ProductSize = {
    name : Text;
    price : Nat;
    stock : Nat;
  };

  type CartItem = {
    productId : Nat;
    sizeName : Text;
    quantity : Nat;
  };

  type Order = {
    id : Nat;
    customerName : Text;
    address : Text;
    phone : Text;
    email : Text;
    items : [CartItem];
    totalAmount : Nat;
    paymentMethod : PaymentMethod;
    timestamp : Time.Time;
  };

  type PaymentMethod = { #cod; #upi; #card };

  type Testimonial = {
    customerName : Text;
    feedback : Text;
    rating : Nat;
    productId : Nat;
    timestamp : Time.Time;
  };

  type SubscriptionPlan = {
    name : Text;
    description : Text;
    price : Nat;
    durationMonths : Nat;
    benefits : [Text];
  };

  let products = Map.empty<Nat, Product>();
  let reviews = Map.empty<Nat, Testimonial>();
  let orders = Map.empty<Nat, Order>();
  let newsletterSubs = Map.empty<Text, Time.Time>();

  var nextProductId = 1;
  var nextOrderId = 1;

  let cartItems = List.empty<(Nat, Text, Nat)>();

  public query ({ caller }) func getProductsByCategory(category : ProductCategory) : async [Product] {
    products.values().toArray().filter(
      func(p) {
        p.category == category and p.isAvailable
      }
    ).sort(Product.compareByName);
  };

  public shared ({ caller }) func addToCart(productId : Nat, sizeName : Text, quantity : Nat) : async () {
    let product = switch (products.get(productId)) {
      case (null) { Runtime.trap("Product does not exist") };
      case (?product) { product };
    };

    let size = product.sizes.find(func(s) { s.name == sizeName });
    if (size == null) { Runtime.trap("Size does not exist") };

    let sizeStock = switch (size) {
      case (?s) { s.stock };
      case (null) { 0 };
    };

    if (sizeStock < quantity) { Runtime.trap("Not enough stock for selected size") };

    cartItems.add((productId, sizeName, quantity));
  };

  public query ({ caller }) func getCartTotal() : async Nat {
    var total = 0;
    for ((productId, sizeName, quantity) in cartItems.values()) {
      switch (products.get(productId)) {
        case (null) {};
        case (?product) {
          switch (product.sizes.find(func(s) { s.name == sizeName })) {
            case (null) {};
            case (?size) {
              total += size.price * quantity;
            };
          };
        };
      };
    };
    total;
  };

  public shared ({ caller }) func placeOrder(customerName : Text, address : Text, phone : Text, email : Text, paymentMethod : PaymentMethod) : async {
    orderId : Nat;
    totalAmount : Nat;
  } {
    let orderId = nextOrderId;
    nextOrderId += 1;

    var totalAmount = 0;
    let orderItems = cartItems.toArray().map(
      func(item) {
        let (productId, sizeName, quantity) = item;
        switch (products.get(productId)) {
          case (null) { Runtime.trap("Product does not exist") };
          case (?product) {
            let size = product.sizes.find(
              func(s) { s.name == sizeName }
            );
            if (size == null) { Runtime.trap("Size does not exist") };

            let sizeStock = switch (size) {
              case (?s) { s.stock };
              case (null) { 0 };
            };
            if (sizeStock < quantity) { Runtime.trap("Not enough stock for selected size") };

            totalAmount += sizeStock * quantity;
          };
        };
        {
          productId;
          sizeName;
          quantity;
        };
      }
    );

    let newOrder : Order = {
      id = orderId;
      customerName;
      address;
      phone;
      email;
      items = orderItems;
      totalAmount;
      paymentMethod;
      timestamp = Time.now();
    };

    orders.add(orderId, newOrder);
    cartItems.clear();
    { orderId; totalAmount };
  };

  public shared ({ caller }) func subscribeNewsletter(email : Text) : async Bool {
    if (newsletterSubs.containsKey(email)) { return false };
    newsletterSubs.add(email, Time.now());
    true;
  };

  public query ({ caller }) func getTestimonials(productId : Nat) : async [Testimonial] {
    reviews.values().toArray().filter(
      func(t) {
        t.productId == productId;
      }
    );
  };

  public query ({ caller }) func getSubscriptionPlans() : async [SubscriptionPlan] {
    [
      {
        name = "Monthly Snack Box";
        description = "Assorted millet snacks delivered monthly";
        price = 999;
        durationMonths = 1;
        benefits = ["10% discount", "Free shipping"];
      },
      {
        name = "Quarterly Combo";
        description = "Best value for 3 months";
        price = 2699;
        durationMonths = 3;
        benefits = ["15% total savings", "Early access to new products"];
      },
    ];
  };
};
