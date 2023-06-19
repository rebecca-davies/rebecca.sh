import { api } from "~/utils/api";
import { FormEvent, useRef, useEffect } from "react";
import { useAnimate, stagger, useInView } from "framer-motion";

const Contact = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const mutation = api.contact.send.useMutation();
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { once: true, margin: "-150px -150px -450px -450px" });

  useEffect(() => {
      if (!isInView) {
        return;
      }
      animate(
        ".title-container",
        { opacity: 1, top: 0 },
        { duration: 0.2, ease: "easeInOut", delay: stagger(0.07) }
      );
      animate(
          "p",
          { opacity: 1, top: 0 },
          { duration: 0.2, ease: "easeInOut" }
      );
      animate(
        "form",
        { opacity: 1, top: 0 },
        { duration: 0.2, ease: "easeInOut", delay: 0.2 }
    );
    }, [isInView, animate, scope]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      !nameRef.current?.value ||
      !emailRef.current?.value ||
      !messageRef.current?.value
    )
      return;
    const name = nameRef.current?.value;
    const email = emailRef.current?.value;
    const message = messageRef.current?.value;
    mutation.mutate({ name, email, message });
  };
  return (
    <div id="previous work" className="relative overflow-clip py-60 bg-[#140c3e] flex flex-col items-center justify-center">
        <div ref={scope} className="max-w-4xl pr-10 pl-10 w-full">
          <div className="relative flex opacity-0 top-[20px] title-container mb-5">
            <p className="pr-6 text-purple-100 text-4xl font-bold mb-5 relative">Let's talk</p>
            <span className="relative top-[20px] h-[1px] bg-purple-50 opacity-20 flex-grow max-w-lg" />
          </div>
        <p className="text-xl max-w-3xl text-[#bdaecd] font-roboto leading-8 relative opacity-0 top-[20px] mb-5">Want to reach out? Whether you have a <span className="text-[#dcff2d] font-bold">question</span> or you just feel like <span className="text-[#dcff2d] font-bold">saying hello</span>, send me a message and I'll do my best to get back to you!👋😊</p>
        <form onSubmit={handleSubmit} className="grid w-full gap-4 opacity-0 relative top-[20px] text-xl">
          <input
            type="text"
            placeholder="Name"
            ref={nameRef}
            className="text-purple-50  border-b-purple-400 border-b-2 bg-transparent p-2 outline-none transition duration-300 ease-in-out focus:border-[#dcff2d]"
          />
          <input
            type="text"
            placeholder="Email"
            ref={emailRef}
            className="text-purple-50  border-b-purple-400 border-b-2 bg-transparent p-2 outline-none transition duration-300 ease-in-out focus:border-[#dcff2d]"
          />
          <textarea
            placeholder="Message"
            ref={messageRef}
            className="text-purple-50 h-40  border-b-purple-400 border-b-2 bg-transparent p-2 outline-none transition duration-300 ease-in-out focus:border-[#dcff2d] resize-none mb-5"
          />
          <button
            type="submit"
            className="btn border-2 border-[#dcff2d] pt-4 pb-4 pl-8 pr-8 font-roboto-mono text-xl max-w-max"
          >
            Submit
          </button>
        </form>
        <div className="h-0 text-[#bdaecd] text-xl mt-8">
          {mutation.error && (
            <p>Something went wrong! {mutation.error.message}</p>
          )}
          {mutation.isSuccess && (
            <div className="transition-all duration-300 ease-in-out top-[0px] opacity-1">
              {mutation.data?.response}
            </div>
          )}
          </div>
        </div>
      </div>
  );
};

export default Contact;