import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Eye, House } from "lucide-react";
import Link from "next/link"

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader />
      <SidebarContent className="px-4">
        <SidebarGroup >
        <SidebarGroupLabel>Operacional</SidebarGroupLabel>
        <SidebarGroupContent className="px-2">
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton render={<Link href="/dashboard" />}>
                <SidebarMenuBadge><House/></SidebarMenuBadge>Home
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
        </SidebarGroup >
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  )
}
