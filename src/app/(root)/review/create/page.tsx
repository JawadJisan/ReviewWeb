import ListingForm from "@/components/shared/ListingForm";

const CreateListingReview = () => {
  // const { sessionClaims } = auth();

  // const userId = sessionClaims?.userId as string;

  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <h3 className="wrapper h3-bold text-center">Listing Form</h3>
      </section>

      <div className="wrapper my-8">
        {/* <EventForm
          // userId={userId}
          type="Create"
        /> */}
        <ListingForm />
      </div>
    </>
  );
};

export default CreateListingReview;
