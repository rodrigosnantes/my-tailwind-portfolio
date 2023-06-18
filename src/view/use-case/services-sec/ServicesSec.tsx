import {
  Palette,
  BarChartHorizontal,
  Factory,
  Layout,
  LayoutTemplate,
} from 'lucide-react';

import SecContainer from '../../ui/sec-container/SecContainer';
import SecContent from '../../ui/sec-content/SecContent';
import SecTitle from '../../ui/sec-title/SecTitle';
import ServiceItem from './components/ServiceItem';

export default function ServicesSec() {
  const servicesList = [
    { value: 0, title: 'LandingPages', icon: <Layout /> },
    { value: 1, title: 'Sites corporativos', icon: <Factory /> },
    { value: 2, title: 'Sistemas gerenciais', icon: <BarChartHorizontal /> },
    { value: 3, title: 'Sistemas Pessoais', icon: <LayoutTemplate /> },
    { value: 3, title: 'Web design', icon: <Palette /> },
  ];

  return (
    <SecContainer secId="services" className="mt-40">
      <SecTitle title="SERVICES" />

      <SecContent>
        <div className="flex flex-col sm:flex-row flex-wrap justify-between items-center gap-6">
          {servicesList.map((item) => (
            <ServiceItem key={item.value} title={item.title} icon={item.icon} />
          ))}
        </div>
      </SecContent>
    </SecContainer>
  );
}
