interface CourseCardProps {
  image?: string;
  rating?: number;
  description?: string;
  videos?: number;
  duration?: number;
  name?: string;
  students?: number;
}

interface TestimonialProps {
  img?: string;
  testimonial?: string;
  name?: string;
  occupation?: string;
}

interface PasswordFieldProps {
  register: UseFormRegister<{
    password: string;
    email: string;
    fullname: string;
  }>;
  error: string | undefined;
}
