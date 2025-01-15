import { DottedSeparator } from "@/components/dotted-separator";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";

const SignInCard = () => {
  return (
    <Card className="w-full h-full md:w-[487px] border-none shadow-none">
      <CardHeader className="flex items-center justify-center text-center p-7">
        <CardTitle className="text-2xl">Welcome Back</CardTitle>
      </CardHeader>
      <div className="px-7 mb-2">
        <DottedSeparator />
      </div>
    </Card>
  );
};

export default SignInCard;