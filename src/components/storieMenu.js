import React, {useState} from 'react';
import "../styles/storieMenu.css"


const StorieMenu = props => {

  const rotate=(() =>{
    var x = document.getElementById("plus");
    x.classList.toggle("rotate");
    var menu = document.getElementById("menu");
    menu.classList.toggle("hide");
  });

  let content = (
    <div id="storie-menu-container">
        <ul className="list">
          <li className="plus item" id="plus" onClick={rotate}>
            <svg width="25" height="25">
              <path d="M20 12h-7V5h-1v7H5v1h7v7h1v-7h7" fillRule="evenodd"></path>
            </svg>
          </li>
          <div id="menu" className="hide">
            <li className="item">
              <span>
                <svg width="25" height="25"><g fillRule="evenodd">
                  <path d="M4.042 17.05V8.857c0-1.088.842-1.85 1.935-1.85H8.43C8.867 6.262 9.243 5 9.6 5.01L15.405 5c.303 0 .755 1.322 1.177 2 0 .077 2.493 0 2.493 0 1.094 0 1.967.763 1.967 1.85v8.194c-.002 1.09-.873 1.943-1.967 1.943H5.977c-1.093.007-1.935-.85-1.935-1.937zm2.173-9.046c-.626 0-1.173.547-1.173 1.173v7.686c0 .625.547 1.146 1.173 1.146h12.683c.625 0 1.144-.53 1.144-1.15V9.173c0-.626-.52-1.173-1.144-1.173h-3.025c-.24-.63-.73-1.92-.873-2 0 0-5.052.006-5 0-.212.106-.87 2-.87 2l-2.915.003z"></path>
                  <path d="M12.484 15.977a3.474 3.474 0 0 1-3.488-3.49A3.473 3.473 0 0 1 12.484 9a3.474 3.474 0 0 1 3.488 3.488c0 1.94-1.55 3.49-3.488 3.49zm0-6.08c-1.407 0-2.59 1.183-2.59 2.59 0 1.408 1.183 2.593 2.59 2.593 1.407 0 2.59-1.185 2.59-2.592 0-1.406-1.183-2.592-2.59-2.592z"></path></g>
                </svg>
              </span>
            </li>
            <li className="item">
              <span>
                <svg width="25" height="25">
                  <path d="M20.067 18.933l-4.157-4.157a6 6 0 1 0-.884.884l4.157 4.157a.624.624 0 1 0 .884-.884zM6.5 11c0-2.62 2.13-4.75 4.75-4.75S16 8.38 16 11s-2.13 4.75-4.75 4.75S6.5 13.62 6.5 11z"></path>
                </svg>
              </span>
            </li>
            <li className="item">
              <span>
                <svg width="25" height="25">
                  <path d="M18.8 11.536L9.23 5.204C8.662 4.78 8 5.237 8 5.944v13.16c0 .708.662 1.165 1.23.74l9.57-6.33c.514-.394.606-1.516 0-1.978zm-.993 1.45l-8.294 5.267c-.297.213-.513.098-.513-.264V7.05c0-.36.218-.477.513-.264l8.294 5.267c.257.21.257.736 0 .933z" fillRule="evenodd"></path>
                </svg>
              </span>
            </li>
            <li className="item">
              <span>
                <svg width="25" height="25">
                  <g fillRule="evenodd">
                    <path d="M9.826 7.698l-4.828 4.828 4.828 4.828.652-.7-4.08-4.128L10.53 8.4"></path>
                    <path d="M14.514 8.4l4.177 4.126-4.17 4.127.7.7 4.83-4.827-4.83-4.828"></path>
                  </g>
                </svg>
              </span>
            </li>
            <li className="item">
              <span>
                <svg width="25" height="25">
                  <g fillRule="evenodd">
                    <path d="M8.45 12H5.3c-.247 0-.45.224-.45.5 0 .274.203.5.45.5h5.4c.247 0 .45-.226.45-.5 0-.276-.203-.5-.45-.5H8.45z"></path>
                    <path d="M17.45 12H14.3c-.247 0-.45.224-.45.5 0 .274.203.5.45.5h5.4c.248 0 .45-.226.45-.5 0-.276-.202-.5-.45-.5h-2.25z"></path>
                  </g>
                </svg>
              </span>
            </li>        
          </div>
        </ul>
    </div>
  );
  return content
}

export default StorieMenu;