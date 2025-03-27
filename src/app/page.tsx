import MinecraftWordle from '@/components/MinecraftWordle';
import { SelectedItemProvider } from '@/context/SelectedItemContext';

export default function Home() {
  return (
    <SelectedItemProvider>
      <MinecraftWordle />
    </SelectedItemProvider>
  );
}
