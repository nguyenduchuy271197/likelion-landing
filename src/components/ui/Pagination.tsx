import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import { Button } from "./Button";
import { generateNumberSequence } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface PaginationProps {
  activePage: number;
  total: number;
  onSetPage: (pageNumber: number) => void;
  onNext: () => void;
  onPrevious: () => void;
}

export function Pagination({
  activePage,
  total,
  onSetPage,
  onPrevious,
  onNext,
}: PaginationProps) {
  const pathname = usePathname();
  return (
    <div className="flex items-center justify-center mt-8 space-x-2">
      <Button
        variant="outline"
        className="w-8 h-8 p-0"
        disabled={activePage === 1}
      >
        <Link
          href={{
            pathname: pathname,
            query: {
              page: activePage - 1,
            },
          }}
        >
          <span className="sr-only">Go to previous page</span>
          <ChevronLeft className="w-4 h-4" />
        </Link>
      </Button>

      {generateNumberSequence(total).map((n) => (
        <Button
          variant={activePage !== n ? "outline" : undefined}
          className="w-8 h-8 p-0"
          key={n}
          asChild
        >
          <Link
            href={{
              pathname: pathname,
              query: {
                page: n,
              },
            }}
          >
            {n}
          </Link>
        </Button>
      ))}

      <Button
        variant="outline"
        className="w-8 h-8 p-0"
        disabled={activePage === total}
      >
        <Link
          href={{
            pathname: pathname,
            query: {
              page: activePage + 1,
            },
          }}
        >
          <span className="sr-only">Go to next page</span>
          <ChevronRight className="w-4 h-4" />
        </Link>
      </Button>
    </div>
  );
}
