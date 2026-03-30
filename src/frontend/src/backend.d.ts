import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface ProductSize {
    name: string;
    stock: bigint;
    price: bigint;
}
export type Time = bigint;
export interface SubscriptionPlan {
    name: string;
    durationMonths: bigint;
    description: string;
    benefits: Array<string>;
    price: bigint;
}
export interface Product {
    name: string;
    isAvailable: boolean;
    description: string;
    sizes: Array<ProductSize>;
    category: ProductCategory;
}
export interface Testimonial {
    customerName: string;
    productId: bigint;
    feedback: string;
    timestamp: Time;
    rating: bigint;
}
export enum PaymentMethod {
    cod = "cod",
    upi = "upi",
    card = "card"
}
export enum ProductCategory {
    ragiChips = "ragiChips",
    jowarPuffs = "jowarPuffs",
    comboPack = "comboPack",
    milletCookies = "milletCookies"
}
export interface backendInterface {
    addToCart(productId: bigint, sizeName: string, quantity: bigint): Promise<void>;
    getCartTotal(): Promise<bigint>;
    getProductsByCategory(category: ProductCategory): Promise<Array<Product>>;
    getSubscriptionPlans(): Promise<Array<SubscriptionPlan>>;
    getTestimonials(productId: bigint): Promise<Array<Testimonial>>;
    placeOrder(customerName: string, address: string, phone: string, email: string, paymentMethod: PaymentMethod): Promise<{
        orderId: bigint;
        totalAmount: bigint;
    }>;
    subscribeNewsletter(email: string): Promise<boolean>;
}
