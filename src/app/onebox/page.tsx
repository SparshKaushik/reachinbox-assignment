import { ChevronDown, RotateCwIcon, SearchIcon, SendIcon } from "lucide-react";
import { Badge, BadgeDot } from "~/components/ui/Badge";
import { Button } from "~/components/ui/Button";
import { Input } from "~/components/ui/Input";
import { Separator } from "~/components/ui/Separator";

export default function Onebox() {
  return (
    <div className="grid h-full w-full grid-cols-[1fr_3fr_1fr]">
      <div className="flex flex-col gap-4 border-r border-border p-4">
        <div className="flex justify-between gap-2">
          <div className="flex flex-col gap-2">
            <h1 className="flex items-center gap-2 text-xl font-bold text-accent">
              All Inbox(s)
              <ChevronDown className="size-4 text-accent" />
            </h1>
            <div className="flex items-center gap-1 text-sm font-semibold">
              25/25
              <span className="text-xs font-normal text-foreground-muted">
                Inboxes selected
              </span>
            </div>
          </div>
          <Button variant="secondary" className="h-fit w-fit p-2">
            <RotateCwIcon className="size-4 text-foreground" />
          </Button>
        </div>
        <Input className="h-8 gap-2 bg-[#23272C] px-2" placeholder="Search">
          <SearchIcon className="size-4 text-border" />
        </Input>
        <div className="flex items-center gap-2">
          <Badge className="text-accent">26</Badge>
          <span className="text-sm">New Replies</span>
          <div className="ml-auto flex items-center gap-2 text-sm">
            <span>Newest</span>
            <ChevronDown className="size-4 text-muted-foreground" />
          </div>
        </div>
        <Separator />
        <div className="flex w-full flex-col gap-2 px-2">
          <div className="flex items-center gap-2">
            <BadgeDot className="border-0" />
            <span>Beata@gmail.com</span>
            <span className="ml-auto text-xs font-normal text-foreground-muted">
              Mar 7
            </span>
          </div>
          <div className="line-clamp-1 text-sm">
            email content which is very long and overflows the container
          </div>
          <div className="space-x-2">
            <Badge className="space-x-2 py-1">
              <BadgeDot className="size-3 border-2" />
              <span>Interesting</span>
            </Badge>
            <Badge className="space-x-2 py-1">
              <SendIcon className="size-3" />
              <span>Interesting</span>
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
}
