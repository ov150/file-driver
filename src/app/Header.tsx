import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";

export function Header(){
    return <div className="border-b py-4 bg-gray-50">
        <div className="items-center container mx-auto flex justify-between">
            <div>underscore</div>
            <div className="flex gap-2">
                <OrganizationSwitcher />
            </div>
            <UserButton />
        </div>
    </div>
}