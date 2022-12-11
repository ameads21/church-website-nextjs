const Contact = () => {
  return (
    <div className="text-center">
      <h1>Contact</h1>
      <h3>Church Location</h3>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2554.195634895129!2d-111.75055215642118!3d40.42064320271764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x874d872fbf68e7a7%3A0x5bb9a60f425a7122!2sThe%20Church%20of%20Jesus%20Christ%20of%20Latter-day%20Saints!5e0!3m2!1sen!2sus!4v1607455772146!5m2!1sen!2sus"
        width="100%"
        height="450"
        frameborder="0"
        style={{ border: "0" }}
        allowfullscreen=""
        aria-hidden="false"
        tabindex="0"
      ></iframe>
      <p className="mt-5">
        Having techincal issues? Contact Aaron Meads at aaron.meads@gmail.com
      </p>
    </div>
  );
};

export default Contact;
