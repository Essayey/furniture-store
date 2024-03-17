import { Layout } from "@/shared/ui";
import { Footer } from "@/widgets/footer";
import { Header } from "@/widgets/header";

export const BaseLayout = () => <Layout footer={<Footer />} navbar={<Header />} />;
