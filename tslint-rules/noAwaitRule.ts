import * as ts from "typescript";
import * as Lint from "tslint";

export class Rule extends Lint.Rules.AbstractRule {
  public static FAILURE_STRING = "await statement forbidden";

  public apply(sourceFile: ts.SourceFile): Lint.RuleFailure[] {
    return this.applyWithFunction(sourceFile, walk);
  }
}

function walk(ctx: Lint.WalkContext<void>) {
  return ts.forEachChild(ctx.sourceFile, function cb(node): void {
    if (node.kind === ts.SyntaxKind.AwaitExpression) {
      const { expression } = node as ts.AwaitExpression;
      const keywordStart = expression.pos - "await".length;
      ctx.addFailure(
        keywordStart,
        expression.pos,
        Rule.FAILURE_STRING,
        Lint.Replacement.deleteFromTo(
          keywordStart,
          expression.getStart(ctx.sourceFile)
        )
      );
    }
    return ts.forEachChild(node, cb);
  });
}
