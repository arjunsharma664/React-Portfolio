import { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { FaArrowRight } from "react-icons/fa6";

const Contact = () => {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data) => {
    if (loading) return;

    setLoading(true);
    setStatus("");

    try {
      // 1. Send contact message to YOUR email
      await emailjs.send(
        "service_aa26qmi",
        "template_ifa69bs",
        {
          name: data.name,
          email: data.email,
          subject: data.subject,
          message: data.message,
        },
        {
          publicKey: "YJlyWUEgw-wZx_EpI",
        }
      );

      // 2. Send automatic reply to USER
      await emailjs.send(
        "service_aa26qmi",
        "template_92jvbq8",
        {
          name: data.name,
          email: data.email,
          subject: data.subject,
          message: data.message,
        },
        {
          publicKey: "YJlyWUEgw-wZx_EpI",
        }
      );

      // 3. Save form data locally
      localStorage.setItem(
        "contactForm",
        JSON.stringify({
          ...data,
          submittedAt: new Date().toISOString(),
        })
      );

      // 4. Clear form
      reset();

      // 5. Show success message
      setStatus(
        "Message sent successfully! I will get back to you soon."
      );
    } catch (error) {
      console.error("EmailJS Error:", error);

      setStatus(
        "Failed to send message. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Get In{" "}
            <span className="text-teal-800">Touch</span>
          </h1>

          <p className="mb-2">
            Have a project in mind or want to discuss potential
            opportunities?
          </p>
        </div>

        {/* Contact Form */}
        <div className="max-w-3xl mx-auto">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6"
          >

            {/* Name + Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* Name */}
              <div>
                <input
                  type="text"
                  placeholder="Enter Name"
                  className={`px-4 py-3 w-full border rounded outline-none focus:border-teal-700 ${
                    errors.name
                      ? "border-red-500"
                      : "border-zinc-500"
                  }`}
                  {...register("name", {
                    required: "Name is required",
                    minLength: {
                      value: 3,
                      message:
                        "Name must be at least 3 characters",
                    },
                    maxLength: {
                      value: 50,
                      message:
                        "Name cannot exceed 50 characters",
                    },
                    pattern: {
                      value: /^[A-Za-z\s]+$/,
                      message:
                        "Name can contain only letters",
                    },
                  })}
                />

                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <input
                  type="email"
                  placeholder="Enter Email"
                  className={`px-4 py-3 w-full border rounded outline-none focus:border-teal-700 ${
                    errors.email
                      ? "border-red-500"
                      : "border-zinc-500"
                  }`}
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value:
                        /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message:
                        "Please enter a valid email address",
                    },
                  })}
                />

                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>

            {/* Subject */}
            <div>
              <input
                type="text"
                placeholder="Enter Subject"
                className={`px-4 py-3 w-full border rounded outline-none focus:border-teal-700 ${
                  errors.subject
                    ? "border-red-500"
                    : "border-zinc-500"
                }`}
                {...register("subject", {
                  required: "Subject is required",
                  minLength: {
                    value: 8,
                    message:
                      "Subject must be at least 8 characters",
                  },
                  maxLength: {
                    value: 50,
                    message:
                      "Subject cannot exceed 50 characters",
                  },
                })}
              />

              {errors.subject && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.subject.message}
                </p>
              )}
            </div>

            {/* Message */}
            <div>
              <textarea
                placeholder="Enter Message"
                className={`px-4 py-3 w-full h-40 resize-none border rounded outline-none focus:border-teal-700 ${
                  errors.message
                    ? "border-red-500"
                    : "border-zinc-500"
                }`}
                {...register("message", {
                  required: "Message is required",
                  minLength: {
                    value: 10,
                    message:
                      "Message must be at least 10 characters",
                  },
                  maxLength: {
                    value: 1000,
                    message:
                      "Message cannot exceed 1000 characters",
                  },
                })}
              />

              {errors.message && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.message.message}
                </p>
              )}
            </div>

            {/* Status */}
            {status && (
              <p
                className={`text-center text-sm ${
                  status.includes("successfully")
                    ? "text-green-600"
                    : "text-red-500"
                }`}
              >
                {status}
              </p>
            )}

            {/* Submit Button */}
            <div className="flex items-center justify-center">
              <button
                type="submit"
                disabled={loading}
                className="flex items-center gap-2 px-8 py-4 bg-zinc-800 text-white cursor-pointer hover:bg-zinc-900 transition rounded-full disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? "Sending..." : "Send Message"}

                {!loading && (
                  <FaArrowRight className="text-sm" />
                )}
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;