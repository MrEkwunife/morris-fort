"use client";
import { useState, FormEvent } from "react";

type FormData = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

type MapContactFormProps = {
  mapEmbedUrl?: string;
  sectionTitle?: string;
  sectionSubtitle?: string;
  onFormSubmit?: (data: FormData) => Promise<void>;
  className?: string;
};

export default function MapContactForm({
  mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d56481.31329163797!2d-82.30112043759952!3d27.776444959332093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sUnited%20States%20solar!5e0!3m2!1sen!2sin!4v1706008331370!5m2!1sen!2sin",
  sectionTitle = "Contact Now",
  sectionSubtitle = "Get In Touch With Us",
  onFormSubmit,
  className = "",
}: MapContactFormProps) {
  // Form state
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  // Form submission status
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState<boolean | null>(null);

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");
    setSubmitSuccess(null);

    try {
      if (onFormSubmit) {
        await onFormSubmit({
          ...formData,
          message: formData.message, // Handle the fact that form field is named "msg" but we want to pass "message"
        });
        setSubmitSuccess(true);
        setSubmitMessage("Thank you! Your message has been sent successfully.");

        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        // Default behavior if no custom handler is provided
        console.log("Form submitted:", formData);
        setSubmitSuccess(true);
        setSubmitMessage("Form submitted successfully! (Development mode)");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitSuccess(false);
      setSubmitMessage(
        "There was an error submitting your form. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`google-map-form ${className}`}>
      <div className="google-map">
        <iframe
          src={mapEmbedUrl}
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map"
        ></iframe>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-6">
            <div className="contact-form-box">
              {/* Section Title Start */}
              <div className="section-title">
                <h3 className="wow fadeInUp">{sectionTitle}</h3>
                <h2 className="text-anime">{sectionSubtitle}</h2>
              </div>
              {/* Section Title End */}

              {/* Contact Form start */}
              <div className="contact-form wow fadeInUp" data-wow-delay="0.75s">
                <form id="contactForm" onSubmit={handleSubmit} noValidate>
                  <div className="row">
                    <div className="form-group col-md-6 mb-4">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        id="name"
                        placeholder="Name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                      />
                      <div className="help-block with-errors"></div>
                    </div>

                    <div className="form-group col-md-6 mb-4">
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        id="email"
                        placeholder="Email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                      />
                      <div className="help-block with-errors"></div>
                    </div>

                    <div className="form-group col-md-6 mb-4">
                      <input
                        type="text"
                        name="phone"
                        className="form-control"
                        id="phone"
                        placeholder="Phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                      />
                      <div className="help-block with-errors"></div>
                    </div>

                    <div className="form-group col-md-6 mb-4">
                      <input
                        type="text"
                        name="subject"
                        className="form-control"
                        id="subject"
                        placeholder="Subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                      />
                      <div className="help-block with-errors"></div>
                    </div>

                    <div className="form-group col-md-12 mb-4">
                      <textarea
                        name="message" // Changed from "msg" to "message" for consistency
                        className="form-control"
                        id="message"
                        rows={4}
                        placeholder="Write a Message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                      ></textarea>
                      <div className="help-block with-errors"></div>
                    </div>

                    <div className="col-md-12 text-center">
                      <button
                        type="submit"
                        className="btn-default"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Submitting..." : "Submit Now"}
                      </button>

                      {submitMessage && (
                        <div
                          id="msgSubmit"
                          className={`mt-3 ${
                            submitSuccess ? "text-success" : "text-danger"
                          }`}
                        >
                          {submitMessage}
                        </div>
                      )}
                    </div>
                  </div>
                </form>
              </div>
              {/* Contact Form end */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
