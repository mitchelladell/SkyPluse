import Select from "react-select";
import { gql } from "@apollo/client";
import { useState, useEffect } from "react";
import { useLazyQuery } from "@apollo/client";

interface CityOption {
  label: string;
  value: string;
}

type DropDownSelectProps = {
  onChange?: (option: CityOption | null) => void;
};

export const CitiesQuery = gql`
  query SearchCities($q: String!) {
    searchCities(q: $q) {
      value
      label
    }
  }
`;

export const DropDownSelect = ({ onChange }: DropDownSelectProps) => {
  const [inputValue, setInputValue] = useState("a");

  const [loadCities, { data, loading }] = useLazyQuery(CitiesQuery);

  // debounce input
  useEffect(() => {
    const handler = setTimeout(() => {
      if (inputValue.trim()) {
        loadCities({ variables: { q: inputValue } });
      }
    }, 300); // adjust delay as needed

    return () => clearTimeout(handler);
  }, [inputValue]);

  return (
    <Select
      isLoading={loading}
      options={data?.searchCities ?? []}
      onChange={onChange}
      onInputChange={(value) => setInputValue(value)}
    />
  );
};
