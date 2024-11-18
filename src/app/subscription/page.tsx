'use client'

import Link from "next/link"

export default function Component() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#5CDB95] to-[#82E9C4] flex flex-col items-start justify-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-6xl mx-auto">
        <div className="space-y-12">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <img src="/assets/contella_logo_russian_violet.png" alt="Contella logo" className="h-12 w-12" />
              <Link className="flex items-center justify-center" href="/">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#303644]">
                Contella
              </h1>
              </Link>
            </div>
            <h2 className="text-xl sm:text-2xl text-[#303644]/90">
              The AI-Powered Contract Management System
            </h2>
          </div>

          <div className="space-y-8">
            <p className="text-xl sm:text-2xl text-justify text-[#303644]/90">
              We are excited to learn that you are interested in <b>Contella</b>!<br />
              Currently, Conella is in the development phase, and we have big plans for the future.<br /><br />
              To keep up to date with our latest updates, please enter your email address.
            </p>

            {/* Start Mailchimp Embed */}
            <div id="mc_embed_shell" className="max-w-2xl mx-auto w-full p-6 rounded-lg">
              <div id="mc_embed_signup">
                <form action="https://gmail.us13.list-manage.com/subscribe/post?u=6c2516d2769670816e720d8aa&amp;id=5745cc002c&amp;f_id=00fcdce2f0"
                  method="post"
                  id="mc-embedded-subscribe-form"
                  name="mc-embedded-subscribe-form"
                  className="validate"
                  target="_blank"
                  noValidate>
                  <div id="mc_embed_signup_scroll">
                    <div className="mc-field-group mt-4">
                      <label htmlFor="mce-EMAIL" className="block text-sm font-medium text-[#303644]">Email Address <span className="text-red-600">*</span></label>
                      <input
                        type="email"
                        name="EMAIL"
                        className="required email block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        id="mce-EMAIL"
                        required
                      />
                    </div>
                    <div id="mce-responses" className="mt-4">
                      <div className="response text-red-600 hidden" id="mce-error-response"></div>
                      <div className="response text-green-600 hidden" id="mce-success-response"></div>
                    </div>
                    <div className="mt-4">
                      <input
                        type="submit"
                        name="subscribe"
                        id="mc-embedded-subscribe"
                        className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition"
                        value="Subscribe"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
            {/* End Mailchimp Embed */}
          </div>
        </div>
      </div>

      <script
        type="text/javascript"
        src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"
        async
      ></script>
      <script async
        dangerouslySetInnerHTML={{
          __html: `
      (function($) {
        window.fnames = new Array();
        window.ftypes = new Array();
        fnames[0] = 'EMAIL';
        ftypes[0] = 'email';
        fnames[1] = 'FNAME';
        ftypes[1] = 'text';
        fnames[2] = 'LNAME';
        ftypes[2] = 'text';
      }(jQuery));
      var $mcj = jQuery.noConflict(true);
    `,
        }}
      ></script>

    </main>

  )
}
