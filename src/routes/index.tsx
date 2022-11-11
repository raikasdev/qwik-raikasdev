import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <div>
      <h1>
        Hi! I am Roni Äikäs.
      </h1>

      <ul>
        <li>
          Entrepreneur and self-taught software developer
        </li>
        <li>
          Physically located in <b className="blue">Jämsä, Finland</b>
        </li>
        <li>
          Currently working on: <a href="https://ritta.fi/pulpetti">Pulpetti (education portal)</a> and <a href="https://novu.co">Novu (notification infrastructure)</a>
        </li>
      </ul>

      <h2>Projects and other cool stuff</h2>

      <table class="projects">
        <tr>
          <td>
            <code>Mikroni</code>
          </td>
          <td>B2B development services (website, consulting)<br />Scoreboard & graphics solutions for sports clubs<br />Computer building services (Soon&#8482;)</td>
        </tr>
        <tr>
          <td>
            <code>Ritta</code>
          </td>
          <td>Modern open-source student information system</td>
        </tr>
        <tr>
          <td>
            <code>Ritta Pulpetti</code>
          </td>
          <td>Easy-to-use SSO portal for education use</td>
        </tr>
        <tr>
          <td>
            <code>Novu (team member)</code>
          </td>
          <td>Open-source notification infrastructure for developers</td>
        </tr>
        <tr>
          <td>
            <code>Testausserveri ry</code>
          </td>
          <td>Multiple smaller projects, including Discord bots and VSCode extensions. Active member on their <a href="https://discord.testausserveri.fi">Discord</a>.</td>
        </tr>
        <tr>
          <td>
            <code>Nordcloud</code>
          </td>
          <td>Worked for 5 weeks in Summer 2022 as the youngest in the entire company at 13. Internal development with TS and React.</td>
        </tr>
        <tr>
          <td>
            <code>Multiple Minecraft servers</code>
          </td>
          <td>Developer at Tubucraft, Dysfold and Gahvila. Founder of few roleplay servers. Java and TypeScript.</td>
        </tr>
      </table>

      <h2>Favourites</h2>

      <table class="projects">
        <tr>
          <td>
            <code>Music</code>
          </td>
          <td>
            The Stupendium, Musiclide, The Chalkeaters, Retropop, Little Big
          </td>
        </tr>
        <tr>
          <td>
            <code>Programming</code>
          </td>
          <td>
            TypeScript, React, NestJS, Fastify, VSCode
          </td>
        </tr>
        <tr>
          <td>
            <code>Trains</code>
          </td>
          <td>
            Stadler (manufacturer), Fenniarail (Finnish operator),<br/>Stadler FLIRT and Stadler KISS (train)
          </td>
        </tr>
      </table>

      <h2>Contact me</h2>

      <table class="projects">
        <tr>
          <td>
            <code>Discord</code>
          </td>
          <td>
            <a href="https://discord.com/users/250662753541423115" target="_blank">
              Raikas#0178
            </a>
          </td>
        </tr>
        <tr>
          <td>
            <code>Email</code>
          </td>
          <td>
            <a href='mailto:roni@testausserveri.fi'>
              roni@testausserveri.fi
            </a>
            <br />
            <a href="https://en.raikas.dev/pgp.txt">Have something to hide? Use my PGP-key</a>
          </td>
        </tr>
        <tr>
          <td>
            <code>GitHub</code>
          </td>
          <td>
            <a href="https://github.com/raikasdev" target="_blank">
              @raikasdev
            </a>
          </td>
        </tr>
        <tr>
          <td>
            <code>Twitter</code>
          </td>
          <td>
            <a
              href="https://twitter.com/raikasdev"
              target="_blank"
            >
              @raikasdev 
            </a>
          </td>
        </tr>
        <tr>
          <td>
            <code>Mastodon</code>
          </td>
          <td>
            <a
              href="https://techspace.social/@raikas"
              rel="me"
              target="_blank"
            >
              @raikas@techspace.social
            </a>
          </td>
        </tr>
        <tr>
          <td>
            <code>LinkedIn</code>
          </td>
          <td>
            <a
              href="https://linkedin.com/in/roni-aikas"
              target="_blank"
            >
              Roni Äikäs 
            </a>
          </td>
        </tr>
      </table>
    </div>
  );
});

const title = 'Roni Äikäs - 14y/o entrepreneur & software developer from Finland'
const description = 'I am';
export const head: DocumentHead = {
  title: title,
  meta: [
    {
      name: 'title',
      content: title,
    },
    {
      name: 'description',
      content: description
    },
    {
      property: 'og:type',
      content: 'website',
    },
    {
      property: 'og:url',
      content: 'https://raikas.dev',
    },
    {
      property: 'og:title',
      content: title,
    },
    {
      property: 'og:description',
      content: description,
    },
    {
      property: 'twitter:card',
      content: 'summary_large_image',
    },
    {
      property: 'twitter:url',
      content: 'https://raikas.dev',
    },
    {
      property: 'twitter:title',
      content: title,
    },
    {
      property: 'twitter:description',
      content: description,
    },
  ]
};
