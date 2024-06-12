import React from "react";

function Contact() {
  return (
    <div name="contact" className="border-t py-14 text-center ">
      <div className="px-2 lg:px-0">
        <h3 className="text-primary-200 text-2xl lg:text-4xl font-semibold mb-8">
          For more enquiries
        </h3>

        <p class="text-lg font-medium my-2">
          Call us today on{" "}
          <a
            href="tel:+447900530285"
            className="text-primary-200 font-semibold"
          >
            07900 530285{" "}
          </a>
          <br />
          or email:{" "}
          <a
            href="mailto:enquiries@anchorcareandeducation.co.uk"
            className="text-primary-200 font-semibold text-sm lg:text-base"
            target="_blank"
            rel="noreferrer"
          >
            enquiries@anchorcareandeducation.co.uk
          </a>
        </p>
      </div>
    </div>
  );
}

export default Contact;
