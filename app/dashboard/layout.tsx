import SideNav from '@/app/ui/dashboard/sidenav';
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex w-full gap-8">
      <SideNav />
      <div className="w-full">{children}</div>
    </div>
  );
}