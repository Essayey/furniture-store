import { FlavorFooterIcon } from "@/shared/assets";
import { Button, Input } from "@/shared/ui";

export const Footer = () => {
  return (
    <footer className=" bg-accentQuaternary py-6 px-24 text-white relative overflow-hidden">
      <div className="mb-8">
        <div className="text-3xl">Подпишитесь на рассылку</div>
        <div className="text-xl">
          Получайте полезные идеи для вашего интерьера и актуальные новости компании
        </div>
      </div>
      <div className="flex gap-16 ">
        <Input
          className="bg-transparent rounded-[16px] w-[420px] placeholder-white"
          placeholder="Ваше имя"
        />
        <Input
          className="bg-transparent rounded-[16px] w-[420px] placeholder-white"
          placeholder="Ваш E-mail"
        />
        <Button className="bg-accentTertiary w-[303px] hover:bg-accentSecondary rounded-[16px]">
          Подписаться
        </Button>
        <FlavorFooterIcon
          className="absolute right-4 -translate-y-[88px] top-0"
          height={350}
          width={350}
        />
      </div>
    </footer>
  );
};
