import React, { memo, useEffect } from "react";
import { NavLink } from "react-router-dom";

import { discoverMenu } from "@/services/local-data";
import request from '@/services/axios'
import { DiscoverWrapper, TopMenu } from "./style";

export default memo(function Discover() {
  // const { route } = props;
  useEffect(()=>{
    request({
      url:'/banner'
    }).then(res=>{console.log(res);})
  }, [])

  return (
    <DiscoverWrapper>
      <div className="top">
        <TopMenu className="wrap-v1">
          {discoverMenu.map((item, index) => {
            return (
              <div className="item" key={item.title}>
                <NavLink to={item.link}>{item.title}</NavLink>
              </div>
            );
          })}
        </TopMenu>
      </div>
      {/* {renderRoutes(route.routes)} */}
    </DiscoverWrapper>
  );
});
