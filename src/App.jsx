import { EventBoard } from 'components/EventBoard/EventBoard';
import { PageTitle } from 'components/PageTitle/PageTitle';
import events from 'events.json';

export function App() {
  return (
    <>
      <PageTitle text="24 core worlds conference" />
      <EventBoard events={events} />
    </>
  );
}
