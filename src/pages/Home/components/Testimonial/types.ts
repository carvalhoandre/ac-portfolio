export interface ITestimonial {
  name: string;
  client: string;
  description: string;
}

export interface IUseTestimonial {
  testimonials: Array<ITestimonial>;
}
