import HeroSection from "@/components/HeroSection";
import ModulesGrid from "@/components/ModulesGrid";
import PrinciplesSection from "@/components/PrinciplesSection";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  const expectedResults = [
    "Повышение продуктивности на 30-50%",
    "Улучшение качества решений",
    "Снижение уровня стресса",
    "Достижение поставленных целей",
    "Развитие новых навыков",
    "Улучшение отношений",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 to-indigo-100">
      <HeroSection />
      <ModulesGrid />
      <PrinciplesSection />

      {/* Results Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-violet-50 to-indigo-50">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 text-gray-800 font-montserrat">
            Ожидаемые результаты
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {expectedResults.map((result, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-md transition-shadow"
              >
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-violet-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon
                      name="TrendingUp"
                      size={24}
                      className="text-violet-600"
                    />
                  </div>
                  <p className="font-medium">{result}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12">
            <Button
              size="lg"
              className="bg-violet-600 hover:bg-violet-700 text-white px-8 py-3"
            >
              <Icon name="BookOpen" size={20} className="mr-2" />
              Скачать программу курса
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gray-900 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 font-montserrat">
            Готовы начать трансформацию?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Присоединяйтесь к программе и откройте свой потенциал для реализации
            в обществе
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" className="bg-violet-600 hover:bg-violet-700">
              <Icon name="UserPlus" size={20} className="mr-2" />
              Записаться на курс
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-gray-900"
            >
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Задать вопрос
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
