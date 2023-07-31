import { Menu, Transition } from "@headlessui/react";
import { Fragment} from "react";
import styled from "styled-components";
import { useGlobalContext } from "../Context/Context";
import {BiChevronDown} from "react-icons/bi"

const MenuList = () => {

const {selectLanguage} = useGlobalContext();
  
 const selectedLanguage = (data) =>{
  selectLanguage(data)
 };

 

  return (
    <Wrapper>
      <div className="menu">
        <ul className="menu-list-left">
          {/* <li className="menu-item">Language</li>
          <li className="menu-item">BookMark</li> */}
        </ul>
        <div className="menu-list-right z-20 w-56 text-right">
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="menu-button inline-flex w-full justify-center rounded-md  px-4 py-2 text-sm font-medium ">
                Language
                <BiChevronDown
              className="ml-2 -mr-1 h-5 w-5"
              aria-hidden="true"
            />
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute z-20 right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="px-1 py-1 ">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active ? "bg-orange-500 text-white" : "text-gray-900"
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        onClick={()=>selectedLanguage("english")}
                      >
                        English
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active ? "bg-orange-500 text-white" : "text-gray-900"
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        onClick={()=>selectedLanguage("hindi")}
                      >
                        Hindi
                      </button>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
    </Wrapper>
  );
};

export default MenuList;

const Wrapper = styled.div`
  position: relative;
  .menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  ul {
    display: flex;
  }

  .menu-list-right {
    .menu-button{
      background-color: orange;
    }
  }
`;
