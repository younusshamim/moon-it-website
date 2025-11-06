import Address from "@/app/pages/contact/address/address";
import PageHeading from "@/components/page-heading";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'যোগাযোগ',
  description: 'ফোন নাম্বার - 01785-882381, 01820-008479 | ঠিকানা - শরিফা প্লাজা ৩য় তলা (জনতা ব্যাংকের উপরে), রেল গেইট, ফেনী সদর, ফেনী।'
}

const Contact = () => {
  return (
    <>
      <PageHeading label="যোগাযোগ" />
      <Address />
    </>
  );
};

export default Contact;
