import React from 'react';
import {
  Header,
  HeaderName,
  HeaderNavigation,
  HeaderMenuItem,
  HeaderGlobalBar,
  HeaderGlobalAction,
  SkipToContent,
  HeaderMenuButton,
  HeaderMenu,
  SideNav,
  SideNavMenu,
  SideNavMenuItem,
  SideNavLink,
  SideNavItems,
  HeaderContainer,
  SwitcherDivider,
} from 'carbon-components-react/lib/components/UIShell';
import Notification20 from '@carbon/icons-react/lib/notification/20';
import UserAvatar20 from '@carbon/icons-react/lib/user--avatar/20';
import AppSwitcher20 from '@carbon/icons-react/lib/app-switcher/20';
import { Link } from 'react-router-dom';

const IAGHeader = () => {

  const onClick = (closeMenu, link) => {

    // Update the current link that is in use
    var x = document.getElementsByClassName("bx--side-nav__link--current");
    var i;
    for (i = 0; i < x.length; i++) {
      x[i].classList.remove("bx--side-nav__link--current");
    }

    if(link) {
      document.getElementById(link).classList.add("bx--side-nav__link--current");
    }

    if(closeMenu) {
      closeMenu();
    }

    // Hide the side nav
    var sidenav = document.getElementsByClassName("bx--side-nav");
    if(sidenav && sidenav.length > 0) {
      sidenav[0].classList.remove("bx--side-nav--expanded");
    }
  };

  return (
    <HeaderContainer
      render={({ isSideNavExpanded, onClickSideNavExpand }) => (
        <>
          <Header aria-label="<APPLICATION_NAME>" onClick={isSideNavExpanded === true? onClickSideNavExpand : null}>
            <SkipToContent />
            <HeaderMenuButton
              aria-label="Open menu"
              onClick={onClickSideNavExpand}
              isActive={isSideNavExpanded}
            />
            <HeaderName href="#" prefix="<APPLICATION_NAME>">
            </HeaderName>
            <SideNav aria-label="Side navigation" expanded={isSideNavExpanded}>
              <SideNavItems>
                <SideNavLink id="homeLink" isActive={window.location.hash === undefined || window.location.hash.length < 3} onClick= {() => {onClick(onClickSideNavExpand, "homeLink");}} element={Link} to="/">Configuration YAML</SideNavLink>
                <SwitcherDivider/>
<ADD_LINKS_HERE>
                <SwitcherDivider/>
                <SideNavLink id="docLink" href="https://ibm.biz/ibm-app-gateway" target="_blank">Documentation</SideNavLink>
              </SideNavItems>
            </SideNav>
          </Header>
          </>
      )}
    />
  );
}

export default IAGHeader;