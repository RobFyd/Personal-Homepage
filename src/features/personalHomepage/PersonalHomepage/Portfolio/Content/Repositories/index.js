import {
  List,
  Tile,
  Name,
  Description,
  Links,
  LinksRow,
  LinksValue,
  Link,
} from "./styled";

export const Repositories = () => (
  <List>
    <Tile>
      <Name>Name</Name>
      <Description>Description</Description>
      <Links>
        <LinksRow>
          <dt>Demo:</dt>
          <LinksValue>
            <Link>link</Link>
          </LinksValue>
        </LinksRow>
        <LinksRow>
          <dt>Code:</dt>
          <LinksValue>
            <Link>link</Link>
          </LinksValue>
        </LinksRow>
      </Links>
    </Tile>
  </List>
);
