import Container from "@/components/shared/container";
import TopBar from "@/components/shared/top-bar";

interface Props {
  searchParams: Promise<{
    query?: string;
    page?: string;
    sort?: string;
    filter?: string[];
  }>;
}

export default async function Page({ searchParams }: Props) {
  return (
    <>
      <TopBar />
      <Container className="pb-14">
        <div className="flex gap-14">
          <div className="w-64"></div>
          <div className="flex-1">
            <div className="flex flex-col gap-16"></div>
          </div>
        </div>
      </Container>
    </>
  );
}
