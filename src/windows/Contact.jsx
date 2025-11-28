import { useState, useEffect } from "react";
import { socials } from "#constants";
import WindowWrapper from "#hoc/WindowWrapper";
import { WindowControls } from "#components";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        // Construct mailto link
        const mailtoLink = `mailto:chaitanyamanepalli130@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;

        window.location.href = mailtoLink;

        setLoading(false);
        setSuccess(true);
        setFormData({ name: "", email: "", subject: "", message: "" });

        setTimeout(() => setSuccess(false), 3000);
    };

    return (
        <>
            <div id="window-header">
                <WindowControls target="contact" />
                <p className="font-bold text-[#5f6266] flex-1 text-center">Contact</p>
            </div>

            <div className="flex flex-col md:flex-row h-full bg-white">
                {/* Left Side - Info */}
                <div className="w-full md:w-1/3 bg-gray-50 border-b md:border-b-0 md:border-r border-gray-200 p-6 flex flex-col justify-between shrink-0">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-2">Get in Touch</h2>
                        <p className="text-gray-600 text-sm mb-6">
                            I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                        </p>

                        <div className="space-y-4">
                            <div>
                                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Email</h3>
                                <p className="text-sm text-gray-700 break-all">chaitanyamanepalli130@gmail.com</p>
                            </div>
                            <div>
                                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Location</h3>
                                <p className="text-sm text-gray-700">Hyderabad, India</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 md:mt-0">
                        <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Socials</h3>
                        <div className="flex gap-3">
                            {socials.map((social) => (
                                <a
                                    key={social.id}
                                    href={social.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="p-2 rounded-lg shadow-sm hover:shadow-md transition-all border border-gray-100"
                                    style={{ backgroundColor: social.bg }}
                                >
                                    <img src={social.icon} alt={social.text} className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Side - Form */}
                <div className="flex-1 p-8 overflow-y-auto">
                    <form onSubmit={handleSubmit} className="space-y-4 max-w-lg mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-1">
                                <label className="text-xs font-medium text-gray-700">Name <span className="text-red-500">*</span></label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div className="space-y-1">
                                <label className="text-xs font-medium text-gray-700">Email <span className="text-red-500">*</span></label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm"
                                    placeholder="john@example.com"
                                />
                            </div>
                        </div>

                        <div className="space-y-1">
                            <label className="text-xs font-medium text-gray-700">Subject</label>
                            <input
                                type="text"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm"
                                placeholder="Project Inquiry"
                            />
                        </div>

                        <div className="space-y-1">
                            <label className="text-xs font-medium text-gray-700">Message <span className="text-red-500">*</span></label>
                            <textarea
                                name="message"
                                required
                                rows={5}
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm resize-none"
                                placeholder="Tell me about your project..."
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className={`w-full py-2.5 rounded-lg text-white text-sm font-medium transition-all ${loading
                                ? "bg-gray-400 cursor-not-allowed"
                                : "bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-600/20"
                                }`}
                        >
                            {loading ? "Opening Mail Client..." : "Send Message"}
                        </button>

                        {success && (
                            <div className="p-3 bg-green-50 text-green-700 text-sm rounded-lg text-center border border-green-100 animate-fade-in">
                                Email client opened!
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </>
    );
};

const ContactWindow = WindowWrapper(Contact, "contact");

export default ContactWindow;
