import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white py-20">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-5xl font-bold mb-6 font-montserrat">
          Самоуправление как способ раскрытия потенциала
        </h1>
        <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
          Комплексная программа развития навыков самоуправления для эффективной
          реализации в обществе
        </p>
        <div className="flex justify-center gap-4 mb-8">
          <Badge variant="secondary" className="text-lg px-4 py-2">
            <Icon name="Clock" size={16} className="mr-2" />8 модулей
          </Badge>
          <Badge variant="secondary" className="text-lg px-4 py-2">
            <Icon name="Users" size={16} className="mr-2" />
            Индивидуальная работа
          </Badge>
          <Badge variant="secondary" className="text-lg px-4 py-2">
            <Icon name="Target" size={16} className="mr-2" />
            Практический результат
          </Badge>
        </div>
        <Button
          size="lg"
          className="bg-white text-violet-600 hover:bg-gray-100 font-semibold px-8 py-3"
        >
          <Icon name="Play" size={20} className="mr-2" />
          Начать обучение
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
