import React, { ChangeEvent } from 'react';
import Downshift from 'downshift';
import { Shipment } from '../App';
import { useNavigate } from 'react-router';

type SearchProps = {
  handleSearch: (e: ChangeEvent<HTMLInputElement>) => void;
  search: string;
  shipments: Shipment[];
};

const Search: React.FC<SearchProps> = ({ handleSearch, search, shipments }) => {
  //@Todo: autocomplete
  const items = shipments.map((shipment: Shipment) => ({
    name: shipment.name,
    id: shipment.id,
  }));

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );
  const navigate = useNavigate();

  return (
    <form className="d-flex my-2 my-lg-0 d-none d-md-block">
      <Downshift
        onChange={(selectedItem) => {
          selectedItem && navigate(`/${selectedItem.id}`);
        }}
        itemToString={(item) => (item ? item.name : '')}
      >
        {({
          getInputProps,
          getMenuProps,
          getItemProps,
          isOpen,
          inputValue,
          selectedItem,
          highlightedIndex,
        }) => (
          <div className="dropdown">
            <input
              {...getInputProps({
                className: 'form-control mr-sm-2 dropdown-toggle',
                type: 'search',
                value: search,
                onChange: handleSearch,
                placeholder: 'Search Companies',
                'aria-label': 'Search',
                'data-toggle': 'dropdown',
              })}
            />
            <div {...getMenuProps()}>
              {isOpen && search && filteredItems.length > 0 ? (
                <div className="dropdown-menu w-100 show">
                  {items
                    .filter(
                      (item) =>
                        !inputValue ||
                        item.name
                          .toLowerCase()
                          .includes(inputValue.toLowerCase())
                    )
                    .map((item, index) => (
                      <button
                        {...getItemProps({
                          key: item.id,
                          index,
                          item,
                          className: `dropdown-item ${
                            highlightedIndex === index ? 'active' : ''
                          }`,
                          style: {
                            backgroundColor:
                              selectedItem === item.name ? '#f5f5f5' : '',
                            fontWeight:
                              selectedItem === item.name ? 'bold' : 'normal',
                            color: '#212529',
                            border: 'none',
                          },
                        })}
                      >
                        {item.name}
                      </button>
                    ))}
                </div>
              ) : null}
            </div>
          </div>
        )}
      </Downshift>
    </form>
  );
};

export default Search;
