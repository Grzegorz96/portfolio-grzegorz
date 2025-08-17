import { Profile } from "./profile";
import { Services } from "./services";
import { Technologies } from "./technologies";
import { Contact } from "./contact";

export function TopPart() {
  return (
    <div className="grid md:grid-cols-4 gap-8 mb-12">
      <Profile />
      <Services />
      <Technologies />
      <Contact />
    </div>
  );
}
