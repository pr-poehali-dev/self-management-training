import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

interface Principle {
  title: string;
  items: string[];
}

const principles: Principle[] = [
  {
    title: "Целеустремленность",
    items: [
      "Четкое определение целей",
      "Конкретные измеримые задачи",
      "План достижения",
      "Регулярные напоминания",
    ],
  },
  {
    title: "Планирование",
    items: [
      "Долгосрочные стратегии",
      "Краткосрочные планы",
      "Разбивка на этапы",
      "Организация ресурсов",
    ],
  },
  {
    title: "Приоритизация",
    items: [
      "Определение важных задач",
      "Фокус на ключевом",
      "Срочное vs важное",
      "Распределение сил",
    ],
  },
];

const PrinciplesSection = () => {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 font-montserrat">
          Фундаментальные принципы
        </h2>
        <Tabs defaultValue="goals" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="goals">Целеустремленность</TabsTrigger>
            <TabsTrigger value="planning">Планирование</TabsTrigger>
            <TabsTrigger value="priorities">Приоритизация</TabsTrigger>
          </TabsList>

          {principles.map((principle, index) => (
            <TabsContent
              key={index}
              value={["goals", "planning", "priorities"][index]}
              className="mt-8"
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon
                      name="Target"
                      size={24}
                      className="mr-3 text-violet-600"
                    />
                    {principle.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {principle.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-start">
                        <Icon
                          name="ArrowRight"
                          size={16}
                          className="mr-3 mt-1 text-violet-500"
                        />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default PrinciplesSection;
