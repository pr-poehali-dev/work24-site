import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });
  const [calculator, setCalculator] = useState({
    service: 'loaders',
    workers: 2,
    hours: 4
  });
  const [calculatorOpen, setCalculatorOpen] = useState(false);

  const services = [
    {
      title: 'Грузчики',
      description: 'Профессиональная бригада грузчиков для переездов, разгрузки и погрузки',
      icon: 'Package',
      price: 'от 500₽/час',
      rate: 500
    },
    {
      title: 'Разнорабочие',
      description: 'Выполнение различных работ: уборка, демонтаж, благоустройство',
      icon: 'Wrench',
      price: 'от 500₽/час',
      rate: 500
    },
    {
      title: 'Упаковка',
      description: 'Профессиональная упаковка мебели и хрупких предметов',
      icon: 'Box',
      price: 'от 300₽/м³',
      rate: 300
    },
    {
      title: 'Складские работы',
      description: 'Погрузка, разгрузка, сортировка товаров на складе',
      icon: 'Warehouse',
      price: 'от 500₽/час',
      rate: 500
    }
  ];

  const reviews = [
    {
      name: 'Анна Петрова',
      company: 'ООО "СтройКомплект"',
      text: 'Отличная команда! Быстро разгрузили фуру с материалами. Ребята аккуратные и ответственные.',
      rating: 5
    },
    {
      name: 'Михаил Иванов',
      company: 'Частное лицо',
      text: 'Помогли с переездом квартиры. Всё упаковали, перевезли, расставили. Очень доволен!',
      rating: 5
    },
    {
      name: 'Ольга Смирнова',
      company: 'Магазин "Домовой"',
      text: 'Регулярно пользуемся услугами для разгрузки товара. Всегда вовремя, качественно.',
      rating: 5
    }
  ];

  const vacancies = [
    {
      title: 'Грузчик',
      salary: 'от 2500₽/день',
      requirements: 'Физическая выносливость, ответственность',
      schedule: 'Свободный график'
    },
    {
      title: 'Разнорабочий',
      salary: 'от 2200₽/день',
      requirements: 'Готовность к физическому труду',
      schedule: 'Посменно'
    }
  ];

  const faq = [
    {
      question: 'Как быстро можете приехать?',
      answer: 'Мы работаем круглосуточно. В среднем наша бригада прибывает в течение 1-2 часов после заявки.'
    },
    {
      question: 'Какая минимальная продолжительность заказа?',
      answer: 'Минимальный заказ - 4 часа работы. Это позволяет эффективно организовать работу бригады.'
    },
    {
      question: 'Предоставляете ли инвентарь?',
      answer: 'Да, наши специалисты приезжают со всем необходимым инвентарём: тележки, стропы, упаковочные материалы.'
    },
    {
      question: 'Работаете ли в выходные?',
      answer: 'Да, мы работаем 24/7 без выходных и праздничных дней.'
    },
    {
      question: 'Как происходит оплата?',
      answer: 'Оплата производится после выполнения работ. Принимаем наличные и безналичный расчёт.'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Спасибо! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', phone: '', message: '' });
  };

  const calculatePrice = () => {
    const rates: { [key: string]: number } = {
      loaders: 500,
      workers: 500,
      warehouse: 500
    };
    const rate = rates[calculator.service] || 500;
    return rate * calculator.workers * calculator.hours;
  };

  const minHours = 4;
  const totalPrice = calculatePrice();
  const isBelowMinimum = calculator.hours < minHours;

  return (
    <div className="min-h-screen font-body">
      <header className="bg-white border-b sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Icon name="Clock" className="text-primary" size={32} />
            <span className="text-2xl font-heading font-bold text-primary">Работаем24</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
            <a href="#about" className="hover:text-primary transition-colors">О нас</a>
            <a href="#prices" className="hover:text-primary transition-colors">Цены</a>
            <a href="#reviews" className="hover:text-primary transition-colors">Отзывы</a>
            <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
            <a href="#vacancies" className="hover:text-primary transition-colors">Вакансии</a>
            <a href="#contacts" className="hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button className="font-heading">
            <Icon name="Phone" size={16} className="mr-2" />
            8 (800) 555-24-24
          </Button>
        </div>
      </header>

      <section className="bg-gradient-to-br from-primary via-orange-500 to-yellow-400 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
              Грузчики и разнорабочие в любое время
            </h1>
            <p className="text-xl mb-8 text-white/90">
              Работаем круглосуточно без выходных. Профессиональные бригады для любых задач. 
              Быстрая подача от 1 часа.
            </p>
            <div className="flex flex-wrap gap-4">
              <Dialog open={calculatorOpen} onOpenChange={setCalculatorOpen}>
                <DialogTrigger asChild>
                  <Button size="lg" variant="secondary" className="font-heading font-semibold">
                    <Icon name="Calculator" size={20} className="mr-2" />
                    Рассчитать стоимость
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle className="font-heading text-2xl">Калькулятор стоимости</DialogTitle>
                    <DialogDescription>
                      Рассчитайте примерную стоимость услуг
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-6 py-4">
                    <div className="space-y-2">
                      <Label htmlFor="service" className="font-semibold">Тип услуги</Label>
                      <Select value={calculator.service} onValueChange={(value) => setCalculator({ ...calculator, service: value })}>
                        <SelectTrigger id="service">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="loaders">Грузчики</SelectItem>
                          <SelectItem value="workers">Разнорабочие</SelectItem>
                          <SelectItem value="warehouse">Складские работы</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="workers" className="font-semibold">Количество человек</Label>
                      <Input
                        id="workers"
                        type="number"
                        min="1"
                        max="20"
                        value={calculator.workers}
                        onChange={(e) => setCalculator({ ...calculator, workers: parseInt(e.target.value) || 1 })}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="hours" className="font-semibold">Количество часов</Label>
                      <Input
                        id="hours"
                        type="number"
                        min="1"
                        max="24"
                        value={calculator.hours}
                        onChange={(e) => setCalculator({ ...calculator, hours: parseInt(e.target.value) || 1 })}
                      />
                      {isBelowMinimum && (
                        <p className="text-sm text-amber-600">Минимальный заказ — {minHours} часа</p>
                      )}
                    </div>
                    
                    <div className="bg-primary/10 p-6 rounded-lg text-center">
                      <p className="text-sm text-muted-foreground mb-2">Примерная стоимость:</p>
                      <p className="text-4xl font-heading font-bold text-primary">
                        {totalPrice.toLocaleString('ru-RU')} ₽
                      </p>
                      <p className="text-xs text-muted-foreground mt-2">
                        {calculator.workers} чел. × {calculator.hours} ч. × 500₽/час
                      </p>
                    </div>
                    
                    <Button className="w-full font-heading" onClick={() => setCalculatorOpen(false)}>
                      <Icon name="Phone" size={18} className="mr-2" />
                      Позвонить для оформления
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
              <Button size="lg" variant="outline" className="bg-white/10 text-white border-white hover:bg-white hover:text-primary font-heading font-semibold">
                <Icon name="Phone" size={20} className="mr-2" />
                Позвонить сейчас
              </Button>
            </div>
            <div className="grid grid-cols-3 gap-6 mt-12 text-center">
              <div>
                <div className="text-4xl font-heading font-bold">5+</div>
                <div className="text-white/80">лет на рынке</div>
              </div>
              <div>
                <div className="text-4xl font-heading font-bold">1500+</div>
                <div className="text-white/80">довольных клиентов</div>
              </div>
              <div>
                <div className="text-4xl font-heading font-bold">24/7</div>
                <div className="text-white/80">работаем без выходных</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold text-center mb-12">Наши услуги</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow animate-fade-in hover:-translate-y-1 duration-300">
                <CardHeader>
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={service.icon} className="text-primary" size={28} />
                  </div>
                  <CardTitle className="font-heading">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-heading font-bold text-primary">{service.price}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-heading font-bold mb-6">О компании Работаем24</h2>
            <p className="text-lg mb-6">
              Мы специализируемся на предоставлении квалифицированных грузчиков и разнорабочих для бизнеса 
              и частных клиентов. Более 5 лет помогаем решать задачи любой сложности.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Shield" className="text-primary" size={32} />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">Надёжность</h3>
                <p className="text-sm text-muted-foreground">Все работники проверены и застрахованы</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Zap" className="text-primary" size={32} />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">Скорость</h3>
                <p className="text-sm text-muted-foreground">Быстрая подача бригады от 1 часа</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Award" className="text-primary" size={32} />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">Качество</h3>
                <p className="text-sm text-muted-foreground">Профессиональный подход к каждому заказу</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="prices" className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold text-center mb-12">Цены на услуги</h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="font-heading text-2xl">Для бизнеса</CardTitle>
                <CardDescription>Долгосрочное сотрудничество</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Грузчик</span>
                  <span className="font-heading font-bold text-primary">от 500₽/час</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Разнорабочий</span>
                  <span className="font-heading font-bold text-primary">от 500₽/час</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Бригадир</span>
                  <span className="font-heading font-bold text-primary">от 600₽/час</span>
                </div>
                <div className="pt-4 border-t">
                  <p className="text-sm text-muted-foreground">✓ Скидки при долгосрочном сотрудничестве</p>
                  <p className="text-sm text-muted-foreground">✓ Безналичный расчёт с НДС</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-heading text-2xl">Для частных лиц</CardTitle>
                <CardDescription>Разовые заказы</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Грузчик</span>
                  <span className="font-heading font-bold text-primary">от 500₽/час</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Разнорабочий</span>
                  <span className="font-heading font-bold text-primary">от 500₽/час</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Упаковка вещей</span>
                  <span className="font-heading font-bold text-primary">от 300₽/м³</span>
                </div>
                <div className="pt-4 border-t">
                  <p className="text-sm text-muted-foreground">✓ Минимальный заказ 4 часа</p>
                  <p className="text-sm text-muted-foreground">✓ Наличная и безналичная оплата</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold text-center mb-12">Отзывы клиентов</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {reviews.map((review, index) => (
              <Card key={index} className="animate-fade-in">
                <CardHeader>
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-yellow-400 fill-yellow-400" size={16} />
                    ))}
                  </div>
                  <CardTitle className="font-heading text-lg">{review.name}</CardTitle>
                  <CardDescription>{review.company}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold text-center mb-12">Частые вопросы</h2>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faq.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg px-6 border-none">
                  <AccordionTrigger className="font-heading font-semibold text-left hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section id="vacancies" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold text-center mb-4">Вакансии</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Присоединяйтесь к нашей команде! Мы предлагаем стабильную работу, 
            своевременную оплату и комфортные условия.
          </p>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {vacancies.map((vacancy, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="font-heading text-2xl">{vacancy.title}</CardTitle>
                  <CardDescription className="text-lg text-primary font-heading font-bold">
                    {vacancy.salary}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="text-sm font-semibold mb-1">Требования:</p>
                    <p className="text-sm text-muted-foreground">{vacancy.requirements}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold mb-1">График:</p>
                    <p className="text-sm text-muted-foreground">{vacancy.schedule}</p>
                  </div>
                  <Button className="w-full mt-4 font-heading">Откликнуться</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-16 bg-gradient-to-br from-primary via-orange-500 to-yellow-400 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-heading font-bold text-center mb-12">Свяжитесь с нами</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-heading font-bold text-2xl mb-6">Контактная информация</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Icon name="Phone" size={24} className="mt-1" />
                    <div>
                      <p className="font-semibold">Телефон:</p>
                      <p className="text-white/90">8 (800) 555-24-24</p>
                      <p className="text-sm text-white/70">Звонок бесплатный по России</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Mail" size={24} className="mt-1" />
                    <div>
                      <p className="font-semibold">Email:</p>
                      <p className="text-white/90">info@rabotaem24.ru</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="MapPin" size={24} className="mt-1" />
                    <div>
                      <p className="font-semibold">Адрес:</p>
                      <p className="text-white/90">г. Москва, ул. Рабочая, д. 24</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Clock" size={24} className="mt-1" />
                    <div>
                      <p className="font-semibold">Режим работы:</p>
                      <p className="text-white/90">Круглосуточно, без выходных</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <form onSubmit={handleSubmit} className="space-y-4 bg-white/10 backdrop-blur p-6 rounded-lg">
                  <div>
                    <Input
                      placeholder="Ваше имя"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="bg-white/20 border-white/30 text-white placeholder:text-white/60"
                    />
                  </div>
                  <div>
                    <Input
                      type="tel"
                      placeholder="Телефон"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      className="bg-white/20 border-white/30 text-white placeholder:text-white/60"
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Сообщение"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      className="bg-white/20 border-white/30 text-white placeholder:text-white/60 min-h-[100px]"
                    />
                  </div>
                  <Button type="submit" variant="secondary" className="w-full font-heading font-semibold">
                    Отправить заявку
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="Clock" size={28} />
            <span className="text-2xl font-heading font-bold">Работаем24</span>
          </div>
          <p className="text-white/70 text-sm">
            © 2024 Работаем24. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;