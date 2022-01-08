import React, { useState } from 'react'
import { CloseIcon, SearchIcon } from '@chakra-ui/icons';
import { IconButton, Input, InputGroup, Stack } from '@chakra-ui/react';

interface Props {
  onChange: (filter: string) => void
}

const LaunchSearch: React.FC<Props> = ({ onChange }) => {

  const [search, setSearch] = useState("");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    onChange(search);
  }

  const onReset = async () => {
    setSearch("");
    onChange("");
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearch(value);
  }

  return (
    <>
      <form
        onSubmit={onSubmit}
      >
        <Stack maxWidth="450px" width="450px" isInline>
          <InputGroup>
            <Input
              backgroundColor={'white'}
              id='launchFilter'
              placeholder="Search"
              value={search}
              border="none"
              onChange={handleInputChange}
            ></Input>

              <IconButton
                aria-label="Search database"
                icon={<SearchIcon />}
                disabled={search === ""}
                type="submit"
              />

              <IconButton
                aria-label="Reset"
                icon={<CloseIcon />}
                disabled={search === ""}
                onClick={onReset}
              />

          </InputGroup>
        </Stack>
      </form>
    </>
  )
}

export default LaunchSearch
