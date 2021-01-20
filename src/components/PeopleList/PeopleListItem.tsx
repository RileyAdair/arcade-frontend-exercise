import React from 'react';
import { Box, Text, Avatar } from '@chakra-ui/react';
import { Person } from '../../types';

export type Props = Pick<Person, 'name' | 'teamName' | 'imageUrl'>;

export const PeopleListItem = React.memo(function({
  name,
  teamName,
  imageUrl
}: Props) {
  return (
    <Box
      backgroundColor="red.200"
      marginLeft={2}
      display="flex"
      alignItems="center"
      paddingY={4}
    >
      <Avatar name={name} src={imageUrl} marginRight={[2, 6]} />
      <div>
        <Text fontSize="sm">{name}</Text>
        <Text fontSize="xs">{teamName}</Text>
      </div>
    </Box>
  );
})
