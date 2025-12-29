import GetTouch from "@/pages/home/GetTouch";
const Footer = () => {
  return (
    <>
      <footer className="bg-[#15222b] text-white py-6 mt-10">
        <GetTouch />
        <div className=" text-center">
          <p className="text-sm">
            Copyright &copy; {new Date().getFullYear()} Technometrics Limited ||
            All Rights Reserved
          </p>
        </div>
      </footer>
    </>
  );
};
export default Footer;
