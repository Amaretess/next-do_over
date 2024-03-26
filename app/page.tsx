"use client"
import Link from "next/link";
import styled from "styled-components";

export default function Home() {
  return (
    <>
      <NavBar>
        <NavItem>
          <Link href="/users">Users</Link>
        </NavItem>
        <NavItem>
          <Link href="/posts">Posts</Link>
        </NavItem>
        <NavItem>
          <Link href="/users">ToDos</Link>
        </NavItem>
      </NavBar>
      <div>
        Welcome to the Dashboard
      </div>
    </>


  );
}

const NavBar = styled.ul`
    display: flex;
    justify-content: center;

`

const NavItem = styled.li`
    margin: 1rem;
`