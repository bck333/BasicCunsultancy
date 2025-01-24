import { Mail, Phone, MapPin } from 'lucide-react';

interface ContactInfoProps {
  icon: typeof Mail | typeof Phone | typeof MapPin;
  title: string;
  content: string;
}

export function ContactInfo({ icon: Icon, title, content }: ContactInfoProps) {
  return (
    <div className="bg-white p-6 rounded-lg">
      <div className="flex items-center text-blue-900 mb-4">
        <Icon className="w-6 h-6 mr-3" />
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <p className="text-gray-600">{content}</p>
    </div>
  );
}