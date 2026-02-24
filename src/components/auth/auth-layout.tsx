import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Wrench } from "lucide-react";

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
}

/**
 * Centered layout wrapper for all auth pages (login, register).
 */
export function AuthLayout({ children, title, subtitle }: AuthLayoutProps) {
  return (
    <div className="min-h-[calc(100vh-8rem)] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        {/* Logo */}
        <Link href="/" className="flex items-center justify-center gap-2.5 mb-8 group">
          <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-brand-600 text-white group-hover:bg-brand-700 transition-colors">
            <Wrench className="w-5 h-5" />
          </div>
          <span className="font-bold text-lg text-neutral-900">Mietpark WW</span>
        </Link>

        {/* Card */}
        <Card padding="lg">
          <div className="mb-6">
            <h1 className="text-xl font-bold text-neutral-900">{title}</h1>
            {subtitle && (
              <p className="mt-1.5 text-sm text-neutral-500">{subtitle}</p>
            )}
          </div>
          {children}
        </Card>
      </div>
    </div>
  );
}
