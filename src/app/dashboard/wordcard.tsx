import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function WordCard() {
  //待复习单词
  const reviewedWord = 130;

  return (
    <Card className="hover:bg-primary/10 ">
      <CardHeader>
        <CardTitle className="flex justify-between">
          <div>单词学习</div>
          <div>520分</div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="gap-8">
          <div className="flex justify-between p-1">
            <div>已掌握的</div>
            <div>130个</div>
          </div>
          <div className="flex justify-between p-1">
            <div>学习中的</div>
            <div>130个</div>
          </div>
          {reviewedWord ? (
            <div className="flex justify-between bg-primary/40 rounded-lg p-1">
              <div>待复习的</div>
              <div>{reviewedWord}个</div>
            </div>
          ) : (
            <div className="flex justify-between p-1">
              <div>待复习的</div>
              <div>{reviewedWord}个</div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
