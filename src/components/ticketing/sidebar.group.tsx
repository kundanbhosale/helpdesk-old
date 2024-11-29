import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

export type SidebarItem = {
  label: string;
  value: {
    text: string;
    image?: string;
    ref?: string;
  };
};

const data = [
  {
    label: "Assignee",
    value: {
      text: "Jhon Doe",
      image: "https://www.svgrepo.com/show/446518/avatar-portrait.svg",
      ref: "",
    },
  },
  {
    label: "Team",
    value: {
      text: "Dev Team",
      image: "https://www.svgrepo.com/show/530203/apple.svg",
      ref: "",
    },
  },
  {
    label: "Email",
    value: {
      text: "kundan@gmail.com",
      image: "",
      ref: "",
    },
  },
  {
    label: "Phone",
    value: {
      text: "+91 93204335435",
      image: "",
      ref: "",
    },
  },
  {
    label: "Address",
    value: {
      text: "Pune, Maharashtra, India",
      image: "",
      ref: "",
    },
  },
];

export function SideBarGroup() {
  return (
    <Accordion type="single" collapsible defaultValue="item-1" className="px-2">
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-xs font-semibold hover:bg-accent px-2">
          TICKET DATA
        </AccordionTrigger>
        <AccordionContent>
          <div className="p-2 grid grid-cols-[100px,auto] items-center gap-3 [&_.label]:flex [&_.label]:gap-2 [&_.label>span]:truncate [&_.label]:items-center">
            {data.map((m, i) => (
              <SidebarItem {...m} key={i} />
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

function SidebarItem(m: SidebarItem) {
  return (
    <>
      <p className="label">
        <span>{m.label}</span>
      </p>
      <div className="flex items-center gap-1">
        {m.value.image && (
          <span>
            {
              <div
                className="size-6 rounded-md"
                style={{
                  backgroundImage: `url(${m.value.image})`,
                  backgroundSize: "contain",
                }}
              />
            }
          </span>
        )}
        <span>{m.value.text}</span>
      </div>
    </>
  );
}
