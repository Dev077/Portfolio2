import Terminal from '@/components/home/Terminal';
import ProjectUniverse from '@/components/home/ProjectUniverse';
import UniversalTimeline from '@/components/home/UniversalTimeline';

export default function Home() {
  return (
    <div className="container mx-auto px-4 md:px-12 py-12">
      <section className="mb-24">
        <Terminal />
      </section>
      
      <section className="mb-24">
        <ProjectUniverse />
      </section>
      
      <section className="mb-24">
        <h2 className="text-2xl font-bold mb-8">Project Timeline</h2>
        <UniversalTimeline />
      </section>
    </div>
  );
}