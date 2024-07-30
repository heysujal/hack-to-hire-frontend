import GradualSpacing from "../GradualSpacing/GradualSpacing";

const About = () => {
  return (
    <div className="min-h-screen p-6">
      <GradualSpacing
        className="mt-6 mb-10 font-display text-center text-4xl font-bold tracking-[-0.1em]  text-indigo-900"
        text="About"
      />

      <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
        <p className="text-lg text-gray-700 leading-relaxed">
          This project has been developed as part of the Hack To Hire Hackathon.
          It provides a real-time flight status and notification system,
          allowing users to keep track of their flights efficiently. Users can
          view flight details, subscribe to notifications via email, SMS, or app
          notifications, and receive timely updates about their flights.
        </p>
      </div>
    </div>
  );
};

export default About;
