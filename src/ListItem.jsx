
import { NavigationMenuLink } from "./components/ui/navigation-menu";

export function ListItem({
  title,
  children,

  ...props
}) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </>
      </NavigationMenuLink>
    </li>
  )
}