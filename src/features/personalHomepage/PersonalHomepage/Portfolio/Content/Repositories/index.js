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

export const Repositories = ({ repositories }) => (
  <List>
    {repositories.map(({ id, name, descripton, homepage, html_url }) => (
      <Tile key={id}>
        <Name>{name}</Name>
        <Description>{descripton}</Description>
        <Links>
          {!!homepage && (
            <LinksRow>
              <dt>Demo:</dt>
              <LinksValue>
                <Link target="_blank" rel="noreferrer" href={homepage}>
                  {homepage}
                </Link>
              </LinksValue>
            </LinksRow>
          )}
          <LinksRow>
            <dt>Code:</dt>
            <LinksValue>
              <Link target="_blank" rel="noreferrer" href={html_url}>
                {html_url}
              </Link>
            </LinksValue>
          </LinksRow>
        </Links>
      </Tile>
    ))}
  </List>
);
