import { useRouter } from "next/router";
import { useTranslation } from "next-translate";
import Link from "next-translate/Link";

const UnsubscribePage = (props: {}) => {
  const {t} = useTranslation();
  const router = useRouter();
  const { email } = router.query;
  return (
    <div className="mx-auto w-2/3 m-20 p-20 bg-onyx rounded-lg text-alabaster">
      <Link href="/">
        <span className="lg:text-2xl xl:text-3xl font-bold cursor-pointer -mt-5">
          nguyenquannnn.xyz
        </span>
      </Link>
      <h2 className="text-2xl my-2">Hi!</h2>
      <p className="text-l my-5">
        Do you want to unsubscribe for the email address {email}?
      </p>
      <button
        className="mt-5 bg-alabaster hover:bg-blue-700 text-onyx font-bold py-2 px-4 rounded"
        onClick={async (e) => {
            e.preventDefault();
            const result = await fetch("/api/email/unsubscribe", {
              method: "PUT",
              mode: "same-origin",
              cache: "no-cache", 
              credentials: "same-origin",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ email: email }),
            });
            let resultJson = await result.json();
            (resultJson);
            if (result.status == 200 && !("error" in resultJson)) {
              alert(t("common:unsubscribe-email-success"))
            } else if ("error" in resultJson) {
                alert(t(`error:${resultJson.error.code}`))
            }
        }}
      >
        Yes, unsubscribe me!
      </button>
    </div>
  );
};

export default UnsubscribePage;
