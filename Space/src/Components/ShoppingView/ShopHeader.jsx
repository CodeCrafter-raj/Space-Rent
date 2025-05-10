// import React from 'react'
// import { HousePlug, LogOut, Menu, ShoppingCart, UserCog } from "lucide-react";
// import { Avatar, AvatarFallback } from "../ui/avatar";
// import { logoutUser } from "@/Store/Auth_Slice";
// import {
//   Link,
//   useLocation,
//   useNavigate,
//   useSearchParams,
// } from "react-router-dom";
// import { Button } from "../ui/button";
// import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
// import { useDispatch, useSelector } from "react-redux";
// import { shoppingViewHeaderMenuItems } from "@/Config/ConfigIndex";
// import { DropdownMenu, DropdownMenuTrigger , DropdownMenuLabel,  DropdownMenuItem, DropdownMenuContent,DropdownMenuSeparator} from '@radix-ui/react-dropdown-menu';

// function MenuItems() {

//   return (
//     <nav className="flex flex-col mb-3 lg:mb-0 lg:items-center gap-6 lg:flex-row">
//       {
//         shoppingViewHeaderMenuItems.map(menuItem =><Link className='text-sm font-medium' key={menuItem.id} to={menuItem.path}>{menuItem.label}</Link>)
//       }
//     </nav>

// )}


// function HeaderRightContent() {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   function handleLogout() {
//     dispatch(logoutUser());
//   }

//   const{ user}=useSelector(state=>state.auth)
//   return <div className='flex lg:items-center lg:flex-row  flex-col gap-4'> 
//       <Button variant='outline ' size='icon'>

//       <ShoppingCart className='w-6 h-6'/>
//       <span className='sr-only'>User Cart</span>
//       </Button>
//       <DropdownMenu>
//         <DropdownMenuTrigger asChild>
//         <Avatar className="bg-black">
//             <AvatarFallback className="bg-black text-white font-extrabold">
//             {user?.userName[0].toUpperCase()}
//             </AvatarFallback>
//           </Avatar>

//         </DropdownMenuTrigger>
//         <DropdownMenuContent side="right" className="w-56">
//         <DropdownMenuLabel>
//         Logged in as {user?.userName}
//         </DropdownMenuLabel>
//         <DropdownMenuSeparator />
//         <DropdownMenuItem onClick={() => navigate("/shop/account")}>
//             <UserCog className="mr-2 h-4 w-4" />
//             Account
//           </DropdownMenuItem>
//           <DropdownMenuSeparator />
//           <DropdownMenuItem onClick={handleLogout} >
//             <LogOut className="mr-2 h-4 w-4" />
//             Logout
//           </DropdownMenuItem>
//         </DropdownMenuContent>
    
//     </DropdownMenu>
//   </div>


//}

//const ShopHeader = () => {

  //The below code is to check whether a user is Authenticated or not then on the basis of this account options will be visible.
  
  //const{isAuthenticated, user}=useSelector(state=>state.auth)
  //console.log(user);

//   return (
//     <header className="sticky top-0 z-40 w-full border-b bg-background">
//       <div className="flex h-16 items-center justify-between px-4 md:px-6">
//       <Link to="/shop/shophome" className="flex items-center gap-2">
//       <HousePlug className="h-6 w-6" />
//       <span className="font-bold">Ecommerce</span>
//       </Link>
//       <Sheet>
//           <SheetTrigger asChild>
//           <Button variant="outline" size="icon" className="lg:hidden">
//               <Menu className="h-6 w-6 bg-rose-600" />
//               <span className="sr-only">Toggle header menu</span>
//             </Button>
//           </SheetTrigger>
//           <SheetContent side="left" className="w-full max-w-xs">
//             <MenuItems />
//             <HeaderRightContent/>
//           </SheetContent>
//         </Sheet>
//         <div className="hidden lg:block">
//           <MenuItems />
//         </div>
//             <div className="hidden lg:block">
//               <HeaderRightContent/>
//             </div> 

//         <div className="hidden lg:block">
//           <HeaderRightContent />
//         </div>
//       </div>
//     </header>
//   )
// }

// export default ShopHeader;
