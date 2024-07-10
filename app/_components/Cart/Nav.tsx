import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

type NavProps = {
  first_title: string;
  first_address: string;
  second_title: string;
  second_address: string;
  third_title: string;
  third_address: string;
};
export default function Nav(navigation: NavProps) {
  return (
    <Breadcrumb className="pt-8 pb-8">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href={navigation.first_address}>
            {navigation.first_title}
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href={navigation.second_address}>
            {navigation.second_title}
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink
            href={navigation.third_address}
            className="text-primary"
          >
            {navigation.third_title}
          </BreadcrumbLink>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
